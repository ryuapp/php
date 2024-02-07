import { cos } from "./cos.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("cos", () => {
  assertEquals(cos(0), 1);
  assertEquals(cos(1), 0.5403023058681398);
  assertEquals(cos(-1), 0.5403023058681398);
  assertEquals(cos(0.5), 0.8775825618903728);
});
