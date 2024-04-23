<?php
header('Access-Control-Allow-Origin: *');

$host = "localhost";
$user = "postgres";
$password = "832301";
$database = "auth_system";

$conn = new mysqli($host, $user, $password, $database);

if (mysqli_connect_error()) {
    echo json_encode(['error' => 'Connection error']);
    exit();
} else {
    // Use isset() to check if POST parameters are set
    if (isset($_POST['name'], $_POST['phno'], $_POST['add'], $_POST['date'])) {
        $name = $_POST['name'];
        $phno = $_POST['phno'];
        $add = $_POST['add'];
        $date = $_POST['date'];

        // Generate a unique ID using a PostgreSQL sequence
        $pid = generateUniqueID($conn);

        // Use prepared statement to prevent SQL injection
        $sql = "INSERT INTO pickup (pid, name, phno, add, date) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        
        if ($stmt) {
            $stmt->bind_param('sssss', $pid, $name, $phno, $add, $date);
            $stmt->execute();

            echo json_encode(['success' => true, 'pickup_id' => $pid]);
        } else {
            echo json_encode(['error' => 'Error in prepared statement']);
        }
        
        $stmt->close();
    } else {
        echo json_encode(['error' => 'Missing POST parameters']);
    }

    $conn->close();
}

function generateUniqueID($conn) {
    // Use the nextval function to get the next value from a PostgreSQL sequence
    $sql = "SELECT nextval('pickup_pid_seq') AS next_id";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        return $row['next_id'];
    } else {
        echo json_encode(['error' => 'Error getting next value from sequence']);
        exit();
    }
}
?>
