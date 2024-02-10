import { tan } from "./tan.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("tan", () => {
  assertEquals(tan(0), 0);
  assertEquals(tan(1), 1.5574077246549023);
  assertEquals(tan(-1), -1.5574077246549023);
  assertEquals(tan(0.5), 0.5463024898437905);
});
