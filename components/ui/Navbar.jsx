import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";
export default function () {
  const { data: session } = useSession();  

  return (
    <nav>
      <div class="container px-6 py-4 mx-auto">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex items-center justify-between">
            <a href="#">
              <div className="flex items-center h-6">
                <img src="/databaselogo.png" className="h-full w-7" />
                <h1 className="text-xl font-extrabold tracking-tight scroll-m-20 bg-gradient-text-steps">
                  Fastcrud
                </h1>
              </div>
            </a>

            <div class="flex lg:hidden">
              <button
                type="button"
                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>

                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            <div class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <a
                href="#"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Join Slack
              </a>
              <a
                href="#"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Browse Topics
              </a>
              <a
                href="#"
                class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Random Item
              </a>
            </div>

            <div class="flex items-center mt-4 lg:mt-0">
              {session ? (
                <>
                  <Button
                    className="mr-2"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Log out
                  </Button>
                  <div class="w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src={session?.user.image}
                      class="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>
                </>
              ) : (
                <>
                  <Button
                    onClick={() =>
                      signIn("google", { callbackUrl: "/profile" })
                    }
                  >
                    Log in
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
