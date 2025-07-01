function isPrime(n) {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function findGoldbach() {
  const input = document.getElementById("evenInput").value.trim();
  const N = BigInt(input);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (N % 2n !== 0n || N < 4n) {
    resultDiv.innerHTML = "Please enter a valid even number ≥ 4.";
    return;
  }

  const maxTry = 1000000n;
  let found = false;

  for (let i = 2n; i <= maxTry; i++) {
    const j = N - i;
    if (isPrime(Number(i)) && isPrime(Number(j))) {
      resultDiv.innerHTML = `Found: ${i} + ${j} = ${N}`;
      found = true;
      break;
    }
  }

  if (!found) {
    resultDiv.innerHTML = "No Goldbach pair found (try a smaller even number).";
  }
}
