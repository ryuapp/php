import { abs } from "./abs.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("abs", () => {
  assertEquals(abs(-1), 1);
  assertEquals(abs(0), 0);
  assertEquals(abs(1), 1);
  assertEquals(abs(-1.1), 1.1);
  assertEquals(abs(1.1), 1.1);
  assertEquals(abs(-0.1), 0.1);
  assertEquals(abs(0.1), 0.1);
  assertEquals(abs(-0.0), 0.0);
});
