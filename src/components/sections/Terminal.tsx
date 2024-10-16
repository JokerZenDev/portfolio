export function Terminal() {
  return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800" id="terminal">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-sky-400">Terminal</h2>
            <div className="bg-black p-4 rounded-lg shadow-lg font-mono text-green-400 max-w-4xl mx-auto">
              <p>$ whoami</p>
              <p className="ml-4">Michele Lenzi - Full Stack Developer</p>
              <p>$ ls -l skills</p>
              <p className="ml-4">total 2</p>
              <p className="ml-4">drwxr-xr-x 2 Michele dev 4096 Dec 18 2017 frontend</p>
              <p className="ml-4">drwxr-xr-x 2 Michele dev 4096 Dec 18 2017 backend</p>
              <p>$ cat /etc/motd</p>
              <p className="ml-4">Welcome to Michele's Portfolio! Feel free to explore and don't forget to leave a commit.</p>
            </div>
          </div>
        </section>
  )
}
