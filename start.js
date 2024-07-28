const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const port = 3000;

// Sample list of hashes (you should replace this with your actual list)
const hashList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10' , 'h11', 'h12', 'h13', 'h14', 'h15', 'h16', 'h17', 'h18', 'h19', 'h20'];

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route for other pages with hash
app.get('/:hash', (req, res) => {
    const hash = req.params.hash;
    // Check if the hash is in the list
    const index = hashList.indexOf(hash);
    if (index !== -1) {
         // Save the Ethereum address to cookies only if the hash exists
         res.cookie('ethAddress', 'someValue', );
       //  console.log('ethAddress cookie set:', res.cookies.ethAddress); // Log the cookie value
        // Remove the hash from the list
        hashList.splice(index, 1);
        console.log("new visit");
        // Send the other view HTML
        res.redirect('/');
    } else {
        console.log("old visit")
        // If the hash is not in the list, redirect to some other page
       res.redirect('/');
    }
});

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));  
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
