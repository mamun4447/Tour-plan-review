import React from "react";

const UnknownReview = () => {
  // const { datas } = useLoaderData();
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  // // console.log(user);

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const form = event.target;
  //   const username = form.username.value;
  //   const rating = form.rating.value;
  //   const description = form.description.value;

  //   const review = {
  //     id: datas._id,
  //     image: user.photoURL,
  //     serviceName: datas.name,
  //     username,
  //     email: user.email,
  //     rating,
  //     description,
  //   };

  //   fetch("http://localhost:5000/review", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(review),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         console.log(data.message);
  //         form.reset();
  //         navigate(`/services/${datas._id}`);
  //       } else {
  //         console.log(data.message);
  //         form.reset();
  //       }
  //     });
  // };
  return <div>UnknownReview</div>;
};

export default UnknownReview;
