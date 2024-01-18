import { useState } from "react"

const CogRight = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.33301 3L11.333 8L6.33301 13"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DoubleCogRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 3L8.5 8L3.5 13M7.5 3L12.5 8L7.5 13"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Speedometer = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.6073 5.04187C12.9591 4.39228 12.1888 3.87741 11.3408 3.52697C10.4927 3.17652 9.58364 2.99742 8.66602 3H8.64102C4.79539 3.01312 1.66602 6.1875 1.66602 10.0706V11.5C1.66602 11.7652 1.77137 12.0196 1.95891 12.2071C2.14645 12.3946 2.4008 12.5 2.66602 12.5H14.666C14.9312 12.5 15.1856 12.3946 15.3731 12.2071C15.5607 12.0196 15.666 11.7652 15.666 11.5V10C15.6686 9.07836 15.4879 8.16541 15.1345 7.31423C14.781 6.46304 14.2619 5.69062 13.6073 5.04187ZM14.666 11.5H8.14789L11.5704 6.79375C11.6485 6.6865 11.6807 6.55263 11.6601 6.42159C11.6395 6.29055 11.5676 6.17307 11.4604 6.095C11.3531 6.01692 11.2193 5.98465 11.0882 6.00528C10.9572 6.02591 10.8397 6.09775 10.7616 6.205L6.91102 11.5H2.66602V10.0706C2.66602 9.87812 2.67539 9.68812 2.69289 9.5H4.16602C4.29862 9.5 4.4258 9.44732 4.51957 9.35355C4.61334 9.25978 4.66602 9.13261 4.66602 9C4.66602 8.86739 4.61334 8.74021 4.51957 8.64644C4.4258 8.55268 4.29862 8.5 4.16602 8.5H2.87039C3.51539 6.07125 5.62039 4.235 8.16602 4.02125V5.5C8.16602 5.63261 8.21869 5.75978 8.31246 5.85355C8.40623 5.94732 8.53341 6 8.66602 6C8.79862 6 8.9258 5.94732 9.01957 5.85355C9.11334 5.75978 9.16602 5.63261 9.16602 5.5V4.02062C10.4064 4.12501 11.5838 4.61206 12.5355 5.41447C13.4871 6.21689 14.1661 7.29505 14.4785 8.5H13.166C13.0334 8.5 12.9062 8.55268 12.8125 8.64644C12.7187 8.74021 12.666 8.86739 12.666 9C12.666 9.13261 12.7187 9.25978 12.8125 9.35355C12.9062 9.44732 13.0334 9.5 13.166 9.5H14.6454C14.6585 9.66562 14.666 9.83187 14.666 10V11.5Z"
      fill="currentColor"
    />
  </svg>
)

const SpeedSelector = (props: {
  speed: string
  onSelect: (speed: string) => void
}) => {
  return (
    <section className="flex w-full items-center justify-between gap-2 rounded border border-theme-border p-1.5">
      <button
        onClick={() => props.onSelect("slow")}
        className={`flex w-full items-center justify-center gap-2 rounded p-3 text-xs font-medium transition  duration-500 hover:bg-white/15 ${
          props.speed === "slow" ? "bg-white/15" : ""
        } cursor-pointer`}
      >
        Slow <CogRight />
      </button>

      <div className="h-[28px] w-[1px] bg-white/20" />

      <button
        onClick={() => props.onSelect("medium")}
        className={`flex w-full items-center justify-center gap-2 rounded p-3 text-xs font-medium transition  duration-500 hover:bg-white/15 ${
          props.speed === "medium" ? "bg-white/15" : ""
        } cursor-pointer`}
      >
        Medium <DoubleCogRight />
      </button>

      <div className="h-[28px] w-[1px] bg-white/20" />

      <button
        onClick={() => props.onSelect("fast")}
        className={`flex w-full items-center justify-center gap-2 rounded p-3 text-xs font-medium transition  duration-500 hover:bg-white/15 ${
          props.speed === "fast" ? "bg-white/15" : ""
        } cursor-pointer`}
      >
        Fast <Speedometer />
      </button>
    </section>
  )
}

const Switch = (props: {
  value: boolean
  setChecked: (value: boolean) => void
}) => {
  return (
    <div className="relative inline-flex cursor-pointer items-center">
      <input
        id="switch"
        type="checkbox"
        checked={props.value}
        onChange={(e) => props.setChecked(e.target.checked)}
        className="peer sr-only"
      />

      <div
        className="
          peer h-6 w-11 rounded-full border border-theme-border
          after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-['']
          peer-checked:bg-zinc-100 peer-checked:after:translate-x-full peer-checked:after:bg-zinc-900"
      ></div>
    </div>
  )
}

const Slider = () => {
  return <></>
}

export const AutoScroll = () => {
  const [speed, setSpeed] = useState("slow")

  const [advanced, setAdvanced] = useState(false)

  const start = async () => {
    console.log("inside extension")
    chrome.runtime.sendMessage({
      hello: "world",
    })
  }

  return (
    <>
      <SpeedSelector speed={speed} onSelect={setSpeed} />

      <label
        htmlFor="switch"
        className="flex w-full items-center justify-between"
      >
        <p>Opções avançadas</p>

        <Switch value={advanced} setChecked={setAdvanced} />
      </label>

      {advanced && (
        <div className="flex flex-col gap-8 rounded border border-theme-border p-4">
          <label htmlFor="follow-pointer" className="flex items-center gap-2">
            Follow Pointer
            <input type="checkbox" id="follow-pointer" />
          </label>

          <label htmlFor="follow-pointer" className="flex items-center gap-2">
            Scroll Speed
            <Slider />
          </label>
        </div>
      )}

      <div className="flex items-center gap-8">
        <button
          onClick={start}
          className="flex items-center justify-center rounded bg-zinc-100 px-8 py-2 text-zinc-900"
        >
          Aplicar
        </button>

        <button className="flex items-center justify-center rounded px-8 py-2 text-zinc-100 transition hover:bg-zinc-100/10">
          Restaurar configuração
        </button>
      </div>
    </>
  )
}
