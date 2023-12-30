const form = document.getElementById('new-user-form')

form.addEventListener('submit', async (e) => {

    e.preventDefault()

    const name = document.getElementById('name-input').value

    if (name === "") return alert("You need to add a name")

    try {
        const response = await fetch('/api/newUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })

        const data = await response.json()
        console.log(data.message);

        alert('User Created Successfully')

    } catch (error) {
        console.log(error);
    }

})