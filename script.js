// Show and hide menu
function OpenNav(){
    document.getElementById("Nav").style.width = "100%";
    }
    function CloseNav(){
    document.getElementById("Nav").style.width = "0%";
    }

    // url

    function url() {
        location.href="https://www.hay8833.com/?inviteCode=3128320";
    }

    // ==========================================
    window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-128px";
            }
        }

    // When the user clicks on the button, scroll to the top of the document
    function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }



    // ===============maquee slider=====================

    
    const debounce = (func, wait, immediate = true) => {
        let timeout
        return () => {
            const context = this
            const args = arguments
            const callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(function () {
            timeout = null
            if (!immediate) {
                func.apply(context, args)
            }
            }, wait)
            if (callNow) func.apply(context, args)
        }
        }

        const appendChildAwaitLayout = (parent, element) => {
        return new Promise((resolve, _) => {
            const resizeObserver = new ResizeObserver((entries, observer) => {
            observer.disconnect()
            resolve(entries)
            })
            resizeObserver.observe(element)
            parent.appendChild(element)
        })
        }

        document.addEventListener('alpine:init', () => {
        Alpine.data(
            'Marquee',
            ({ speed = 1, spaceX = 0, dynamicWidthElements = false }) => ({
            dynamicWidthElements,
            async init() {
                if (this.dynamicWidthElements) {
                const images = this.$el.querySelectorAll('img')

                if (images) {
                    await Promise.all(
                    Array.from(images).map(image => {
                        return new Promise((resolve, _) => {
                        if (image.complete) {
                            resolve()
                        } else {
                            image.addEventListener('load', () => {
                            resolve()
                            })
                        }
                        })
                    })
                    )
                }
                }
                
                this.originalElement = this.$el.cloneNode(true)
                const originalWidth = this.$el.scrollWidth + spaceX * 4

                this.$el.style.setProperty('--marquee-width', originalWidth + 'px')
                this.$el.style.setProperty(
                '--marquee-time',
                ((1 / speed) * originalWidth) / 50 + 's'
                )
                this.resize()

                window.addEventListener('resize', debounce(this.resize.bind(this), 100))
            },
            async resize() {

                this.$el.innerHTML = this.originalElement.innerHTML

                let i = 0
                while (this.$el.scrollWidth <= this.$el.clientWidth) {
                if (this.dynamicWidthElements) {

                    await appendChildAwaitLayout(
                    this.$el,
                    this.originalElement.children[i].cloneNode(true)
                    )
                } else {
                    this.$el.appendChild(
                    this.originalElement.children[i].cloneNode(true)
                    )
                }
                i += 1
                i = i % this.originalElement.childElementCount
                }

                let j = 0
                while (j < this.originalElement.childElementCount) {
                this.$el.appendChild(this.originalElement.children[i].cloneNode(true))
                j += 1
                i += 1
                i = i % this.originalElement.childElementCount
                }
            },
            })
        )
        })

        Alpine.start()