function App() {
  return (
    <main className='min-h-screen bg-black px-4 pb-10 font-sans text-[#f4f4f4] sm:px-6'>
      <nav className='mx-auto flex min-h-[3.75rem] w-full max-w-[80rem] items-center justify-between gap-4 py-3'>
        <a className='shrink-0 text-xl font-bold tracking-[-0.06em] text-[#f4f4f4] no-underline' href='#home'>nexus</a>
        <ul className='m-0 flex list-none flex-wrap items-center justify-end gap-x-1 p-0'>
          <li><a className='block whitespace-nowrap rounded-full border border-[#686868] px-2.5 py-1 text-[0.72rem] text-[#e1e1e1] no-underline sm:px-3' href='#home'>Home</a></li>
          <li><a className='block whitespace-nowrap rounded-full border border-transparent px-2.5 py-1 text-[0.72rem] text-[#e1e1e1] no-underline hover:border-[#686868] sm:px-3' href='#schedule'>Schedule</a></li>
          <li><a className='block whitespace-nowrap rounded-full border border-transparent px-2.5 py-1 text-[0.72rem] text-[#e1e1e1] no-underline hover:border-[#686868] sm:px-3' href='#speakers'>Speakers</a></li>
          <li><a className='block whitespace-nowrap rounded-full border border-transparent px-2.5 py-1 text-[0.72rem] text-[#e1e1e1] no-underline hover:border-[#686868] sm:px-3' href='#tickets'>Tickets</a></li>
          <li><a className='block whitespace-nowrap rounded-full border border-transparent px-2.5 py-1 text-[0.72rem] text-[#e1e1e1] no-underline hover:border-[#686868] sm:px-3' href='#venue'>Venue</a></li>
          <li><a className='block whitespace-nowrap rounded-full border border-transparent px-2.5 py-1 text-[0.72rem] text-[#e1e1e1] no-underline hover:border-[#686868] sm:px-3' href='#sponsors'>Sponsors</a></li>
        </ul>
      </nav>
      <section className='relative isolate mx-auto mt-3 min-h-[19rem] w-full max-w-[80rem] overflow-hidden rounded-2xl bg-[#1b1b1b] p-5 sm:mt-6 sm:aspect-[1.55] sm:min-h-[13rem] sm:rounded-[clamp(1rem,3vw,2rem)] sm:p-[clamp(1.1rem,4.5vw,4rem)]' id='home'>
        <div className='relative z-10 flex items-center justify-between gap-4 text-[0.52rem] font-semibold tracking-[0.01em] text-[#d0d0d0] sm:text-[clamp(0.48rem,0.8vw,0.72rem)]'>
          <p className='m-0'>OCTOBER 15-17, 2026</p>
          <p className='m-0 max-w-[56%] text-right sm:max-w-none'>Horizon Convention Center, Tech City, Utopolis</p>
        </div>
        <div className='absolute bottom-5 left-5 z-10 w-[82%] sm:bottom-auto sm:left-[clamp(1.1rem,4.5vw,4rem)] sm:top-1/2 sm:w-[min(68%,48rem)] sm:-translate-y-[35%]'>
          <h1 className='m-0 mb-3 text-[clamp(1.8rem,9vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.045em] text-[#f4f4f4] sm:text-[clamp(1.55rem,7vw,5.8rem)]'>NEXT-GEN AI<br className='hidden sm:block' /> SUMMIT</h1>
          <p className='mb-4 max-w-[75%] text-[0.65rem] leading-[1.5] text-[#d1d1d1] sm:mb-5 sm:max-w-[40rem] sm:text-[clamp(0.55rem,1vw,0.92rem)]'>Explore the cutting-edge innovations shaping the future of artificial intelligence.<br className='hidden sm:block' /> Join global leaders and visionaries for two days of insight, discussion, and breakthroughs.</p>
          <a className='inline-flex items-center gap-2.5 rounded-full bg-[#0649df] px-4 py-2.5 text-[0.65rem] text-white no-underline hover:bg-[#2365f2] sm:text-[clamp(0.58rem,0.85vw,0.78rem)]' href='#tickets'>Early bird tickets <span aria-hidden='true'>&#8599;</span></a>
        </div>
        <svg className='absolute right-[-2%] top-[55%] z-0 w-[45%] -translate-y-[42%] -rotate-2 fill-[#0649df] opacity-90 sm:right-[7%] sm:top-1/2 sm:w-[clamp(7rem,32%,25rem)] sm:opacity-100' viewBox='0 0 180 180' aria-hidden='true'>
          <path d='M86 8 107 34 145 18 151 45 121 63 159 70 151 98 119 86 136 119 111 135 91 107 82 153 53 147 60 110 28 131 12 107 42 82 5 78 9 49 45 59 31 28 54 14 74 43Z' />
          <path d='m79 71 26-22 16 19-26 23 19 24-21 16-21-29-27 18-15-22 29-21-2-24 26-2Z' />
        </svg>
      </section>
      <section className='mx-auto mt-8 grid w-full max-w-[80rem] grid-cols-1 items-stretch gap-3 min-[681px]:mt-[clamp(2rem,6vw,4rem)] min-[681px]:grid-cols-[0.84fr_1fr]' aria-label='Summit highlights'>
        <article className='flex min-h-[21rem] min-w-0 flex-col rounded-[clamp(1.25rem,3vw,2rem)] bg-[#0649f5] p-6 min-[681px]:min-h-[22.5rem] min-[681px]:p-[clamp(1.5rem,3.6vw,2rem)]' id='speakers'>
          <h2 className='m-0 text-[clamp(1.35rem,2.4vw,1.8rem)] font-semibold leading-[1.15] tracking-[-0.035em]'>Speakers</h2>
          <div className='mt-[1.65rem] grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-5'>
            <a className='grid aspect-square w-12 place-items-center rounded-full bg-[#e2e4e8] text-2xl text-[#0649df] no-underline transition hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-white' href='#speakers' aria-label='Meet the speakers'><span aria-hidden='true'>&#8599;</span></a>
            <p className='m-0 max-w-[17rem] text-[clamp(0.78rem,1.1vw,0.9rem)] leading-[1.55] text-[#d8dff1]'>Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.</p>
          </div>
          <div className='mt-auto flex items-center justify-between gap-3 pt-8'>
            <div className='flex pl-1' aria-label='Featured speakers'>
              <span className='-ml-1 grid aspect-square w-10 place-items-center rounded-full border-2 border-[#0649f5] bg-[#a76c4d] text-[0.65rem] font-bold text-white shadow-[inset_0_-1rem_1.3rem_#1115] sm:w-12'>AM</span><span className='-ml-1 grid aspect-square w-10 place-items-center rounded-full border-2 border-[#0649f5] bg-[#d5a47d] text-[0.65rem] font-bold text-white shadow-[inset_0_-1rem_1.3rem_#1115] sm:w-12'>JL</span><span className='-ml-1 grid aspect-square w-10 place-items-center rounded-full border-2 border-[#0649f5] bg-[#e0b898] text-[0.65rem] font-bold text-white shadow-[inset_0_-1rem_1.3rem_#1115] sm:w-12'>SK</span><span className='-ml-1 grid aspect-square w-10 place-items-center rounded-full border-2 border-[#0649f5] bg-[#50382f] text-[0.65rem] font-bold text-white shadow-[inset_0_-1rem_1.3rem_#1115] sm:w-12'>NR</span>
            </div>
            <a className='inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-[#96b5ff] px-4 py-3 text-sm text-white no-underline transition hover:bg-white/10' href='#speakers'>And more <span aria-hidden='true'>&#8599;</span></a>
          </div>
        </article>
        <div className='grid grid-rows-[auto] gap-3 min-[681px]:grid-rows-2'>
          <article className='min-h-48 min-w-0 rounded-[clamp(1.25rem,3vw,2rem)] bg-[#0649f5] p-6 min-[681px]:p-[clamp(1.5rem,3.6vw,2rem)]' id='schedule'>
            <h2 className='m-0 text-[clamp(1.35rem,2.4vw,1.8rem)] font-semibold leading-[1.15] tracking-[-0.035em]'>Technologies</h2>
            <p className='mt-5 max-w-[39rem] text-[clamp(0.78rem,1.1vw,0.9rem)] leading-[1.55] text-[#d8dff1]'>Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.</p>
          </article>
          <article className='min-h-48 min-w-0 rounded-[clamp(1.25rem,3vw,2rem)] bg-[#e0e0e2] p-6 text-[#111] min-[681px]:p-[clamp(1.5rem,3.6vw,2rem)]' id='venue'>
            <h2 className='m-0 text-[clamp(1.35rem,2.4vw,1.8rem)] font-semibold leading-[1.15] tracking-[-0.035em]'>Networking Opportunities</h2>
            <p className='mt-5 max-w-[39rem] text-[clamp(0.78rem,1.1vw,0.9rem)] leading-[1.55] text-[#36363a]'>Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.</p>
          </article>
        </div>
      </section>
    </main>
  )
}
6
export default App

