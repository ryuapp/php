import { checkdate } from "./checkdate.ts";
import { assertEquals } from "../dev_deps.ts";

Deno.test("checkdate", () => {
  assertEquals(checkdate(2, 29, 2020), true);
  assertEquals(checkdate(2, 29, 2021), false);
  assertEquals(checkdate(2, 30, 2020), false);
  assertEquals(checkdate(13, 30, 2021), false);
});
