import client1 from '../../../assets/001.webp';
import client2 from '../../../assets/003.webp';
import client3 from '../../../assets/006.webp';

const clients = [
	{
	  id: 1,
	  name: "Client Name 1",
	  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	  image: client1,
	  url: "https://example.com/client3",
	},
	{
	  id: 2,
	  name: "Client Name 2",
	  description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	  image: client2,
	  url: "https://example.com/client3",
	},
	{
	  id: 3,
	  name: "Client Name 3",
	  description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
	  image: client3,
	  url: "https://example.com/client3",
	},
	{
		id: 4,
		name: "Client Name 4",
		description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
		image: client2,
		url: "https://example.com/client3",
	},
	{
		id: 5,
		name: "Client Name 5",
		description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
		image: client3,
		url: "https://example.com/client3",
	},
	{
		id: 6,
		name: "Client Name 6",
		description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
		image: client3,
		url: "https://example.com/client3",
	},
  ];

const Client = () => {
    return (
        <section className="py-12 mt-14">
        <div className="container mx-auto w-4/5 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
                <a 
                key={client.id} 
                href={client.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
                >
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden group">
                    <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-48 object-cover transition duration-300 delay-150 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 p-4 text-white text-center">
                    <h3 className="text-xl font-semibold">{client.name}</h3>
                    <p className="text-sm">{client.description}</p>
                    </div>
                </div>
                </a>
            ))}
            </div>

        </div>
        </section>
    )
}

export default Client
