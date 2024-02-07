import { acos } from "./acos.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("acos", () => {
  assertEquals(acos(0), 1.5707963267948966);
  assertEquals(acos(1), 0);
  assertEquals(acos(-1), 3.141592653589793);
  assertEquals(acos(0.5), 1.0471975511965979);
});
