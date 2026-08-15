import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          User information is unavailable.
        </h2>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="flex flex-col items-center gap-4 bg-blue-600 p-8 text-white">
            <img
              src={user.image}
              alt={user.firstName}
              className="h-32 w-32 rounded-full border-4 border-white"
            />

            <h1 className="text-3xl font-bold">
              {user.firstName} {user.lastName}
            </h1>

            <p className="text-lg">@{user.username}</p>
          </div>

          <div className="grid gap-6 p-8 md:grid-cols-2">
            <div className="rounded-xl border p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Profile Details
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">First Name</p>
                  <p className="font-medium">{user.firstName}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Last Name</p>
                  <p className="font-medium">{user.lastName}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Username</p>
                  <p className="font-medium">@{user.username}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Gender</p>
                  <p className="font-medium">{user.gender}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;