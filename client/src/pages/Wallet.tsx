



export const Wallet = () => {
  const members = [
    {
      name: "John Michael",
      email: "john@creative-tim.com",
      role: "Manager",
      department: "Organization",
      status: "online",
      employed: "23/04/18",
      avatar: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    },
    {
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      role: "Programator",
      department: "Developer",
      status: "offline",
      employed: "23/04/18",
      avatar: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    },
    // Agregar más miembros aquí
  ];

  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
        <div className="flex items-center justify-between gap-8 mb-8">
          <div>
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Members list
            </h5>
            <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              See information about all members
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
            <button
              className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              view all
            </button>
            <button
              className="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
              </svg>
              Add member
            </button>
          </div>
        </div>
        <div className="p-6 px-0 overflow-scroll">
          <table className="w-full mt-4 text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Member</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Function</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Status</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">Employed</th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50"></th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="text-sm">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.department}</p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <span
                      className={`px-2 py-1 text-xs font-bold uppercase rounded-md ${
                        member.status === "online"
                          ? "bg-green-500/20 text-green-900"
                          : "bg-blue-gray-500/20 text-blue-gray-900"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">{member.employed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

