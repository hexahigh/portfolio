/** @type {import('./$types').PageLoad} */ export async function load({ params }) {
    let fact0 = await fetch("https://boofdev.eu/api/fact")
    let fact1 = fact0.text()
  return {
    fact: fact1
  };
}
