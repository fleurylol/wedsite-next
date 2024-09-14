"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  guestName: string;
  songRequest: string;
};

const RSVPTest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("guestName", { required: true })}
        placeholder="First & Last Name"
        id="guestName"
      />
      {errors.guestName && <span>This field is required</span>}
      <input
        type="text"
        {...register("songRequest")}
        placeholder="Song Request"
        id="songRequest"
      />
      <input type="submit" />
    </form>
  );
};

export default RSVPTest;
