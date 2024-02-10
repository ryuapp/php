import { ord } from "./ord.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("ord", () => {
  assertEquals(ord("a"), 97);
  assertEquals(ord("0"), 48);
  assertEquals(ord("!"), 33);
  assertEquals(ord("php"), 112);
});
