import express,{Router} from 'express'
import MiddelwareContent from '../Middleware/content'
import { addContentController, createPostController, deletePostController, updataPostController, upload } from '../controllers/postController'

const router = Router()

/**
* @openapi
* /api/post/:
*  post:
*     tags:
*     - API post
*     description: add new post
*     responses:
*       200:
*         description: App is up and running
*       400:
*         description: Error on the client side
*       500:
*         description: Server side problems
*/
router.post("/", createPostController)
router.delete("/:id", deletePostController)
router.patch('/:id', updataPostController)
router.post('/content/:id',MiddelwareContent, upload.single('content'), addContentController)
router.use('/content', express.static("image"))
export = router