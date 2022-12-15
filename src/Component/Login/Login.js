import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const hadnleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-5 px-5 mb-12 ">
      <div className="w-full lg:w-96 shadow-xl border p-8 rounded-xl bg-base-100">
        <h1 className="text-2xl text-center text-info">Sign Up</h1>

        <form onSubmit={handleSubmit(hadnleSignUp)}>

        {/* User Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="name"
              className="input input-bordered w-full"
            />
            {errors.name && (<p className="text-error" role="alert">{errors.email?.message}</p>)}
          </div>

        {/* User Email */}
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Email</span></label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-error" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

        {/* User Phone */}
        <div className="form-control w-full">
            <label className="label"><span className="label-text">Phone</span></label>
            <input
              {...register("phone", { required: "Email Address is required" })}
              type="number"
              placeholder="phone"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-error" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          {/* Phone */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password Address is required",
                pattern: {
                //   value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{6}/,
                  message: "must be strong",
                },
              })}
              type="text"
              placeholder="password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-error" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input type="submit" value="Signup" className="btn btn-info w-full text-white mt-4" />

        </form>

        <p className="text-center text-sm mt-2">
          Already have an account?
          <Link to="/login" className=" font-semibold">
             Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
