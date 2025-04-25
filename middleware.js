// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth";
export const middleware = auth; /*Name badla ja raha hai yaha auth ko middleware kiya ja raha hai*/

export const config = {
  matcher: ["/account"],
};
