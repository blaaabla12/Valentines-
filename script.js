body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: red;
    font-family: 'Arial', sans-serif;
}

.container {
    text-align: center;
    color: white;
}

h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s;
}

.yes {
    background-color: green;
    color: white;
}

.no {
    background-color: white;
    color: red;
}

button:hover {
    transform: scale(1.1);
}
