import Link from "next/link"

import { Icons } from "@/components/icons"
import { UserAuthForm } from "@/components/dashboard/user-auth-form"
import Image from "next/dist/client/image"

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-lg border border-transparent bg-transparent py-2 px-3 text-center text-sm  font-medium text-slate-900 hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 md:top-8 md:left-8"
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
          <Image className="mx-auto h-6 w-6" height={24} width={24} src="/logo.svg" alt="app logo" /> 
          <h1 className="text-2xl font-bold">Prihlásenie</h1>
          <p className="text-sm text-slate-600">
            Zadaj svoj email pre prihlásenie
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-slate-600">
          <Link href="/register" className="underline hover:text-brand">
            Ešte nemáš účet? Zaregistruj sa
          </Link>
        </p>
      </div>
    </div>
  )
}
