import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(60, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Must start with +380 and have 12 digits")
    .required("Required"),
  position_id: Yup.string().required("Required"),
  photo: Yup.mixed()
    .required("Required")
    .test("fileFormat", "Only JPG/JPEG images are allowed.", (value) => {
      if (value && value.type) {
        return value.type === "image/jpeg" || value.type === "image/jpg";
      }
      return false;
    })
    .test(
      "fileSize",
      "File size should not exceed 5MB.",
      (value) => value && value.size <= 5 * 1024 * 1024
    ),
});
