/** @type {import('./$types').PageLoad} */ export function load({ params }) {
    let fact0 = fetch("https://boofdev.eu/api/fact")
    let fact1 = fact0.text()
  return {
    fact: fact1
  };
}
