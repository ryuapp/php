import { asin } from "./asin.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("asin", () => {
  assertEquals(asin(0), 0);
  assertEquals(asin(1), 1.5707963267948966);
  assertEquals(asin(-1), -1.5707963267948966);
  assertEquals(asin(0.5), 0.5235987755982989);
});
