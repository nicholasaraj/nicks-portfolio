export default function Contact() {
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg">Feel free to reach out to me via email or LinkedIn!</p>
        <ul className="mt-4">
          <li>Email: <a href="mailto:nicholas@example.com" className="text-blue-500">nicholas@example.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/nicholas" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/nicholas</a></li>
        </ul>
      </main>
    );
  }
  