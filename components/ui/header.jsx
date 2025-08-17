import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ChevronDown, FileTextIcon, GraduationCapIcon, LayoutDashboard, PenBoxIcon, StarsIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu'
import { checkUser } from '@/lib/checkUser'

const Header = async() => {
  await checkUser();
  
  return (
    <header className='fixed top-0 w-full border-b background/80 backdrop-blur-md
    z-50 supports-[backdrop-filter]:bg-background/60'>
       <nav className="container mx-auto px-4 h-16 flex items-center justify-between  ">
        <Link href="/">
          <Image src="/careerpilotLogo4.jpeg" 
          alt="Sensai Logo" 
          width={200} 
          height={60} 
          priority
          className='h-12 py-1 w-auto object-contain'
          />
        </Link>
        <div className='flex items-center space-x-2'>
            <SignedIn>
                <Link href={"/dashboard"}>
                <Button variant="outline">
                    <LayoutDashboard className="h-4 w-4"/>
                    <span className='hidden md:block'>Industry Insights</span>
                </Button>
                </Link>
            

            <DropdownMenu>
  <DropdownMenuTrigger>
  <Button>
                    <StarsIcon className="h-4 w-4"/>
                    <span className='hidden md:block'>Growths Tools</span>
                    <ChevronDown className='h-4 w-4'/>
                </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Link href={'/resume'} className='flex items-center gap-2'>
      <FileTextIcon className="h-4 w-4"/>
                    <span>Build Resume</span>
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href={'/ai-cover-letter'} className='flex items-center gap-2'>
      <PenBoxIcon className="h-4 w-4"/>
                    <span>Cover Letter</span>
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href={'/interview'} className='flex items-center gap-2'>
      <GraduationCapIcon className="h-4 w-4"/>
                    <span>Interview Prep</span>
      </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</SignedIn>

<SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements:{
                avatarBox: "w-10 h-10",
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier: "font-semibold",

              },
            }}
            afterSignOutUrl='/'
            />
          </SignedIn>
        </div>
       </nav> 
    </header>
  )
}

export default Header