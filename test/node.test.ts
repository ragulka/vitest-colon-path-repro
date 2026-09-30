// @vitest-environment node
import { expect, test } from 'vitest'
import { name } from '../src/route:name/index.ts'

test('imports a module whose path contains a colon', () => {
  expect(name).toBe('route')
})
