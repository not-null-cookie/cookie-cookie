import { Hono } from 'hono'
import mime from "mime";

/// <reference path="../worker-configuration.d.ts" />
// 通过 npm run cf-typegen 更新配置
const app = new Hono()

app.get('/', (c) => c.text('Hello World!'))


export default app
