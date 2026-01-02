<template>
    <section class="relative h-screen w-screen flex justify-center items-start ml-27">
        <div>
            <h2 class="text-(--text-primary-color) text-xl mb-10">
                .about()
            </h2>
            <div class="grid grid-cols-2 gap-20 w-275">
                <div class="space-y-3 text-(--text-tertiary-color)">
                    <p>
                        <span>Hello!</span>  I'm Yoris — developer, problem-solver, coffee enthusiast.
                    </p>
                    <p>
                        I build applications that don't just work — they feel good to use. My sweet spot? Combining clean logic with creative solutions, whether that's debugging gnarly code or designing smooth user experiences.
                    </p>
                    <p>
                        Here's my superpower: I find answers fast. That obscure bug? Solved. That perfect library? Found. If the solution exists, I'll track it down in record time.
                    </p>
                    <p>
                        I'm all about leveling up, collaborating with great people, and shipping work I'm proud of. So, <a href="#" class="text-(--tertiary-color) hover:underline hover:opacity-75">Let's connect</a> and build something awesome.
                    </p>
                </div>
                <div class="relative w-70 h-70">
                    <div class="absolute inset-0 translate-x-4 translate-y-4 border-2 border-(--tertiary-color) rounded-md"></div>
                    <img src="../assets/img/foto.webp" class="relative z-10 w-auto h-auto object-contain rounded-md">
                </div>
            </div>
        </div>
    </section>
</template>