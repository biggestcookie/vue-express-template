import { Request, Response, Router } from "express";
import {
  SpeedrunCreateRequest,
  SpeedrunData,
} from "../../../shared/models/speedrun-data";
import { SpeedrunEntity } from "../db/speedrun-entity";
import { UserEntity } from "../db/user-entity";

const router = Router();

router.get("/:id?", getMultipleSpeedruns);
router.post("/submit", submitSpeedrun);

/**
 * Get top 10 speedruns
 */
async function getMultipleSpeedruns(
  request: Request,
  response: Response<SpeedrunData[]>
) {
  const results = await SpeedrunEntity.findAll({
    limit: 10,
    order: [["totalTimeMilliseconds", "ASC"]],
    ...(request.params["id"] && {
      where: { userId: request.params["id"] },
    }),
  });
  response.send(results.map((result) => result.get({ plain: true })));
}

/**
 * Submit a run
 */
async function submitSpeedrun(
  request: Request<{}, {}, SpeedrunCreateRequest>,
  response: Response<SpeedrunData>
) {
  const [userInstance] = await UserEntity.findOrCreate({
    where: { username: request.body.username },
  });

  const newSpeedrunInstance = await SpeedrunEntity.create({
    userId: userInstance.id,
    username: request.body.username,
    totalTimeMilliseconds: request.body.totalTimeMilliseconds,
  });

  // If user does not exist, create it

  response.send(newSpeedrunInstance.get({ plain: true }));
}

export default router;
