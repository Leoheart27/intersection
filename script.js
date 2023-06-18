const selectAll = (e) => document.querySelectorAll(e)

const cards = selectAll('section')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
}, {
    threshold: 0.7,
})

cards.forEach(card => {
    observer.observe(card)
})