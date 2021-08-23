import { Router } from 'express'
import address from './address'

// guaranteed to get dependencies
export default () => {
	const app = Router()
	address(app)
	return app
}