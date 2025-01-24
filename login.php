<?php

// Database connection variables
$host = 'localhost'; // Database host
$dbname = 'odessy'; // Database name
$username = 'root'; // Database username (default is 'root' for localhost)
$password = ''; // Database password (leave empty if no password is set)

// Create a PDO connection to the MySQL database
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Could not connect to the database: " . $e->getMessage());
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve submitted username and password
    $input_username = $_POST['username'];
    $input_password = $_POST['password'];

    // Prepare a SQL statement to find the user by username
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->bindParam(':username', $input_username);
    $stmt->execute();
    

    // Fetch the user from the database
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    // Check if user exists and verify password
    if ($user && $input_password == $user['password']) {
        echo "Login successful!";
    } else {
        echo "Invalid username or password.";
	echo $input_password;
	echo $input_username;
    }
} else {
    echo "Invalid request method.";
}

?>
