import { sin } from "./sin.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("sin", () => {
  assertEquals(sin(0), 0);
  assertEquals(sin(1), 0.8414709848078965);
  assertEquals(sin(-1), -0.8414709848078965);
  assertEquals(sin(0.5), 0.479425538604203);
});
