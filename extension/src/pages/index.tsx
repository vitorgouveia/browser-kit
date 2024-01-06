import {
  useCallback,
  useState,
  createContext,
  ReactElement,
  useContext,
  useMemo,
  useEffect,
} from "react"

import { icons } from "@/components/tools-icons"
import { PageContext } from "./_app"
import { AutoScroll } from "@/components/pages/auto-scroll"

const ArrowLeft = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3L2 8M2 8L7 13M2 8H14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ArrowRight = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 3.5L14.5 8.5M14.5 8.5L9.5 13.5M14.5 8.5H2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_1766_26)">
        <path
          fill="#E3E2E2"
          fillRule="evenodd"
          d="M2.456 2.031A2.456 2.456 0 000 4.487v10.878c0 1.356 1.1 2.456 2.456 2.456h15.088c1.356 0 2.456-1.1 2.456-2.456V4.487c0-1.356-1.1-2.456-2.456-2.456H2.456zm.702 1.755a1.403 1.403 0 100 2.807 1.403 1.403 0 000-2.807zm2.456 1.403a1.404 1.404 0 112.807 0 1.404 1.404 0 01-2.807 0zm5.263-1.403a1.404 1.404 0 100 2.807 1.404 1.404 0 000-2.807z"
          clipRule="evenodd"
        ></path>
        <mask
          id="mask0_1766_26"
          style={{ maskType: "luminance" }}
          width="20"
          height="16"
          x="0"
          y="2"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M2.456 2.031A2.456 2.456 0 000 4.487v10.878c0 1.356 1.1 2.456 2.456 2.456h15.088c1.356 0 2.456-1.1 2.456-2.456V4.487c0-1.356-1.1-2.456-2.456-2.456H2.456zm.702 1.755a1.403 1.403 0 100 2.807 1.403 1.403 0 000-2.807zm2.456 1.403a1.404 1.404 0 112.807 0 1.404 1.404 0 01-2.807 0zm5.263-1.403a1.404 1.404 0 100 2.807 1.404 1.404 0 000-2.807z"
            clipRule="evenodd"
          ></path>
        </mask>
        <g mask="url(#mask0_1766_26)">
          <path
            fill="#E3E2E2"
            d="M.175 4.487a2.28 2.28 0 012.28-2.28v-.351a2.632 2.632 0 00-2.63 2.631h.35zm0 10.878V4.487h-.35v10.878h.35zm2.28 2.28a2.28 2.28 0 01-2.28-2.28h-.35a2.632 2.632 0 002.63 2.631v-.35zm15.089 0H2.456v.351h15.088v-.35zm2.28-2.28a2.28 2.28 0 01-2.28 2.28v.351a2.632 2.632 0 002.631-2.631h-.35zm0-10.878v10.878h.351V4.487h-.35zm-2.28-2.28a2.28 2.28 0 012.28 2.28h.351a2.632 2.632 0 00-2.631-2.631v.35zm-15.088 0h15.088v-.351H2.456v.35zm-.527 2.982c0-.678.55-1.228 1.229-1.228v-.35c-.872 0-1.58.706-1.58 1.578h.351zm1.229 1.228c-.679 0-1.229-.55-1.229-1.228h-.35c0 .872.707 1.58 1.579 1.58v-.352zM4.386 5.19c0 .678-.55 1.228-1.228 1.228v.351c.872 0 1.579-.707 1.579-1.579h-.351zM3.158 3.961c.678 0 1.228.55 1.228 1.228h.35c0-.872-.706-1.579-1.578-1.579v.351zm3.86-.35c-.873 0-1.58.706-1.58 1.578h.351c0-.678.55-1.228 1.228-1.228v-.35zm1.578 1.578c0-.872-.707-1.579-1.579-1.579v.351c.678 0 1.228.55 1.228 1.228h.351zM7.017 6.77c.872 0 1.58-.708 1.58-1.58h-.352c0 .678-.55 1.228-1.228 1.228v.351zm-1.579-1.58c0 .872.707 1.58 1.58 1.58v-.352c-.679 0-1.229-.55-1.229-1.228h-.35zm4.21 0c0-.678.55-1.228 1.229-1.228v-.35c-.872 0-1.58.706-1.58 1.578h.352zm1.229 1.228c-.678 0-1.228-.55-1.228-1.228h-.351c0 .872.707 1.58 1.579 1.58v-.352zm1.228-1.228c0 .678-.55 1.228-1.228 1.228v.351c.872 0 1.579-.707 1.579-1.579h-.351zm-1.228-1.228c.678 0 1.228.55 1.228 1.228h.35c0-.872-.706-1.579-1.578-1.579v.351z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1766_26">
          <path
            fill="#fff"
            d="M0 0H20V15.79H0z"
            transform="translate(0 2.031)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  )
}

const Brand = () => {
  return (
    <div className="text-gra flex items-center gap-2 px-2 text-zinc-200">
      <Icon />
      <h1 className="text-xl font-medium">BrowserKit</h1>
    </div>
  )
}

const Header = () => {
  return (
    <header
      style={{ boxShadow: "0px 0px 74.7px 0px rgba(255, 255, 255, 0.15)" }}
      className="flex w-full items-center justify-between rounded-full border border-theme-border bg-black p-1.5"
    >
      <Brand />
    </header>
  )
}

type Tool = {
  icon: ReactElement
  name: string
  description: string
  backgroundColor: string
  page: string
}

const tools: Tool[] = [
  {
    icon: icons.autoScroll,
    name: "Auto Scroll",
    page: "auto-scroll",
    description: "Take the hand of the mouse",
    backgroundColor: "#111003",
  },
  {
    icon: icons.websiteBlocker,
    name: "Website Blocker",
    page: "website-blocker",
    description: "Block access to websites",
    backgroundColor: "#110303",
  },
  {
    icon: icons.aiSummarize,
    name: "AI Summarize",
    page: "ai-summarize",

    description: "Quickly summarize websites",
    backgroundColor: "#03110E",
  },
  {
    icon: icons.liveShare,
    name: "Live Share",
    page: "live-share",

    description: "Real-time browser sharing",
    backgroundColor: "#121212",
  },
  {
    icon: icons.shortcuts,
    name: "Shortcuts",
    page: "shortcuts",

    description: "Execute custom actions",
    backgroundColor: "#11030E",
  },
  {
    icon: icons.translate,
    name: "Translate",
    page: "translate",

    description: "Translate any website",
    backgroundColor: "#110A03",
  },
  {
    icon: icons.screenshot,
    name: "Screenshot",
    page: "screenshot",

    description: "Most powerful screenshot",
    backgroundColor: "#030E11",
  },
  {
    icon: icons.recorder,
    name: "Recorder",
    page: "recorder",

    description: "GIF and MP4 recorder",
    backgroundColor: "#0A0311",
  },
]

const ToolCard = (props: Tool & { onNavigate: (page: string) => void }) => {
  return (
    <button
      className="flex h-[150px] w-[250px] flex-col overflow-hidden rounded border border-theme-border transition duration-500 hover:brightness-[1.30]"
      onClick={() => props.onNavigate(props.page)}
    >
      <div
        style={{
          backgroundColor: props.backgroundColor,
        }}
        className={`flex h-[80px] w-full items-center justify-center gap-2`}
      >
        {props.icon}
      </div>

      <footer className="flex w-full items-center justify-between p-3">
        <div className="flex flex-col items-start">
          <h2 className="text-base font-medium text-zinc-100">{props.name}</h2>
          <p className="text-left text-sm text-zinc-500">{props.description}</p>
        </div>

        <ArrowRight />
      </footer>
    </button>
  )
}

function hexToHSL(hex: string) {
  // Remove the hash (#) if present
  hex = hex.replace(/^#/, "")

  // Parse the hex values to RGB
  let bigint = parseInt(hex, 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255

  // Convert RGB to HSL
  r /= 255
  g /= 255
  b /= 255

  let max = Math.max(r, g, b)
  let min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h! /= 6
  }

  // Format HSL values
  h = Math.round(h! * 360)
  s = Math.round(s * 100)
  l = Math.round(l * 100)

  return { h, s, l }
}

const ToolHeader = () => {
  const { page, setPage } = useContext(PageContext)

  const tool = tools.find((tool) => tool.page === page)

  const rgbBackground = useMemo(
    () => hexToHSL(tool?.backgroundColor ?? "#ffffff"),
    [tool?.backgroundColor]
  )

  return (
    <header
      style={{
        boxShadow: `0px 0px 74.7px 0px hsla(${rgbBackground?.h}, 100%, 60%, 0.15)`,
      }}
      className={`tool-header flex w-full ${tool?.page} items-center justify-between rounded-full border border-theme-border bg-black p-1.5`}
    >
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full transition duration-300 hover:bg-white/15"
        onClick={() => setPage("home")}
      >
        <ArrowLeft />
      </button>

      <div className="flex items-center gap-2">
        <h1 className="text-base font-bold text-white">{tool?.name}</h1>

        <div className="tool-icon flex h-6 w-auto items-center gap-1">
          {tool?.icon}
        </div>
      </div>

      <div className="h-8 w-8" />
    </header>
  )
}

export default function Home() {
  const { page, setPage } = useContext(PageContext)

  const tool = tools.find((tool) => tool.page === page)

  const hslBackground = useMemo(
    () => (tool?.backgroundColor ? hexToHSL(tool?.backgroundColor) : undefined),
    [tool?.backgroundColor]
  )

  return (
    <main
      className={`relative flex h-[778px] w-[572px] flex-col gap-12 bg-black p-8 text-white`}
    >
      {page !== "home" && <ToolHeader />}

      {page === "home" && (
        <>
          <Header />

          <ul className="flex w-full flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool.name}>
                <ToolCard onNavigate={(page) => setPage(page)} {...tool} />
              </li>
            ))}
          </ul>
        </>
      )}

      {page === "auto-scroll" && <AutoScroll />}

      <div
        style={{
          background: `hsla(${hslBackground?.h ?? 0}, ${
            hslBackground ? "100%" : "0%"
          }, 70%, 1)`,
          filter: "blur(136.3000030517578px)",
        }}
        className={`absolute bottom-0 h-[30px] w-full`}
      />
    </main>
  )
}
