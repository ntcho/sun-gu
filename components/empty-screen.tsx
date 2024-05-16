export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          Sun-gu: Celebrating Korean Immigrant Startup Founders
        </h1>
        <p className="leading-normal text-zinc-900">
          <i>Sun-gu</i> [Korean: <i>to pioneer</i>] is an interactive
          documentary telling the stories of first-generation Korean immigrant
          founders in Silicon Valley.
        </p>
        <p className="leading-normal text-zinc-900">
          Start exploring by asking questions that you would ask an immigrant
          startup founder — such as being a Korean in silicon valley, challenges
          as an immigrant founder, or their success stories.
        </p>
      </div>
    </div>
  )
}
