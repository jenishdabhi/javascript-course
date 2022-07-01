

const transaction = [200, 400, -450, 3000, 650, -130, 70, 1300];

for (movments of transaction) {
  if (movments > 0) {
    console.log(`you deposite money ${movments}`);
  } else {
    console.log(`you withdraw money ${movments}`);
  }
}
