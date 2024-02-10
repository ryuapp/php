import { atan } from "./atan.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("atan", () => {
  assertEquals(atan(0), 0);
  assertEquals(atan(1), 0.7853981633974483);
  assertEquals(atan(-1), -0.7853981633974483);
  assertEquals(atan(0.5), 0.4636476090008061);
});
