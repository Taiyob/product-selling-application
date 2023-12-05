import Swal from "sweetalert2";

const InputBrand = () => {
  const handleAddName = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    console.log(name);
    const newBrandName = { name };
    form.reset();
    fetch("https://myapp-88098zwbe-md-oli-ullahs-projects.vercel.app/brand-name", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBrandName),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged === true){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been added successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h3 className="text-4xl text-center font-normal mt-10">Make Brand</h3>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form onSubmit={handleAddName}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-800 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add Brand Name
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default InputBrand;
