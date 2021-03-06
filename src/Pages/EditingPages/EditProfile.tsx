import React, { useEffect, useMemo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import PageLayout from "./PageLayout";
import styles from "./styles.module.css";
import Button, { BtnType } from "../../components/Button/Button";
import { DropzoneField } from "./DropZone";

import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/socialIcons/facebook.png";
import website from "../../images/socialIcons/website.png";
import youtube from "../../images/socialIcons/youtube.png";
import tiktok from "../../images/socialIcons/tiktok.png";
import vlive from "../../images/socialIcons/vlive.png";
import { ErrorMessage } from "@hookform/error-message";

export type Inputs = {
  name: string;
  email: string;
  introduction: string;
  profleImage: File;
  coverImage: File;
  moreInfo: {
    socialLinks: {
      twitter: string;
      instagram: string;
    };
    websiteURL: string;
    youtubeURL: string;
    facebookUsername: string;
    tiktokUsername: string;
    vLiveURL: string;
  };
};

export const emailPattern =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const EditProfile = () => {
  const defaultValues = useMemo(() => ({
    name: "",
    email: "",
    introduction: "",
    profleImage: "",
    coverImage: "",
    moreInfo: {
      socialLinks: {
        twitter: "",
        instagram: "",
      },
      websiteURL: "",
      youtubeURL: "",
      facebookUsername: "",
      tiktokUsername: "",
      vLiveURL: "",
    },
  }), [])

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues,
  });


  const info = watch("introduction");

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("submiting form", data);

    useEffect(() => {
      
      isSubmitSuccessful && reset({...defaultValues});
    }, [defaultValues, reset, isSubmitSuccessful])

  return (
    <div>
      <PageLayout heading="????????? ??????" className={styles.editProfile}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">?????? ??????t ?????????</label>
            <input
              placeholder="?????? ?????? ?????????"
              {...register("name", {
                required: { value: true, message: "this  field is required" },
              })}
            />
            {errors.name && (
              <span className={styles.errors}>{errors?.name?.message}</span>
            )}
          </div>

          <div className={styles.infoWrapper}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">????????? ??????</label>
              <input
                placeholder="????????? ??????"
                {...register("email", {
                  required: { value: true, message: "this field is required" },
                  pattern: {
                    value: emailPattern,
                    message: "please provide a valid email address!",
                  },
                })}
              />
              {errors.email && (
                <span className={styles.errors}>{errors?.email?.message}</span>
              )}
            </div>
            <p>
              ????????????????????? ????????? ?????? ?????????
              <br />
              ???????????????, ????????? ???????????????????????????.
              <br />
              ????????? ????????? ???????????? ???????????? ????????????.
            </p>
          </div>

          <div className={styles.inputContainer}>
            <label style={{ marginTop: 20 }} htmlFor="introduction">
              ?????????
            </label>
            <textarea
              className={styles.textarea}
              placeholder="?????????"
              {...register("introduction", {
                required: { value: true, message: "this field is required" },
                maxLength: {
                  value: 200,
                  message: "Maximum 200 characters are allowed",
                },
              })}
            />
            <small className={styles.count}>{info?.length}/200</small>
            <ErrorMessage
              name="introduction"
              errors={errors}
              render={({ message }) => (
                <span className={styles.errors}>{message}</span>
              )}
            />
          </div>

          {/* drag and drops */}
          <div className={styles.infoWrapper}>
            <div className={styles.inputContainer}>
              <div>
                <label htmlFor="profleImage">????????? ?????????</label>
                <p>
                  ?????? ?????????????????? : 1,000x1000px <br />
                  ???????????? : JPG, PNG ?????? GIF. <br />
                  ?????????????????? : 10MB
                </p>
              </div>
              <DropzoneField name="profileImage" control={control} />
            </div>
          </div>

          <div className={styles.infoWrapper}>
            <div className={styles.inputContainer}>
              <div>
                <label htmlFor="coverImage">????????? ??????</label>
                <p>
                  ?????? ?????????????????? : 1,000x500px <br />
                  ???????????? : JPG, PNG ?????? GIF. <br /> ?????????????????? : 10MB
                </p>
              </div>
              <DropzoneField name="coverImage" control={control} />
            </div>
          </div>
          {/* drag and drops  end*/}

          <div className={styles.infoWrapper}>
            <div className={styles.inputContainer}>
              <div>
                <label htmlFor="socialLinks">????????? ??????</label>
                <p>
                  ???????????? ?????????????????? <br /> ????????????????????? ???????????????.
                </p>
              </div>
              <div className={styles.socialLinks}>
                <Controller
                  render={({ formState: { dirtyFields } }) => (
                    // we can use this render props to handle api integeration
                    <Button
                      btnType={BtnType.TERTIARY}
                      width="100%"
                      onClick={() =>
                        setValue(
                          "moreInfo.socialLinks.twitter",
                          "https//twitter.com"
                        )
                      }>
                      <img
                        className={styles.icon}
                        src={twitter}
                        alt="twitter icon"
                      />
                      <span>Twitter ????????????</span>
                    </Button>
                  )}
                    name="moreInfo.socialLinks.twitter"
                    control={control}
                    defaultValue=""
                />

                <label className={styles.hidden} htmlFor="instagram">
                  ????????? ??????
                </label>
                <Controller
                  render={({ formState: { dirtyFields } }) => (
                    // we can use this render props to handle api integeration
                    <Button
                      btnType={BtnType.TERTIARY}
                      width="100%"
                      onClick={() =>
                        setValue(
                          "moreInfo.socialLinks.instagram",
                          "https//instagram.com"
                        )
                      }>
                      <img
                        className={styles.icon}
                        src={instagram}
                        alt="instagram icon"
                      />
                      <span>Instagram ????????????</span>
                    </Button>
                  )}
                  name="moreInfo.socialLinks.instagram"
                  control={control}
                  defaultValue=""
                />
              </div>
              {errors.moreInfo && (
                <span className={styles.errors}>
                  {errors.moreInfo.socialLinks?.message}
                </span>
              )}
            </div>
          </div>

          <div className={styles.infoWrapper}>
            <div className={styles.otherLinksContainer}>
              <label htmlFor="otherInfo">
                <span>
                  <img src={website} alt="website link" /> Website
                </span>{" "}
                <span>https://</span>
              </label>
              <input
                placeholder="Website URL"
                {...register("moreInfo.websiteURL")}
              />
            </div>
            <div className={styles.otherLinksContainer}>
              <label htmlFor="otherInfo">
                <span>
                  <img src={youtube} alt="youtube link" /> YouTube
                </span>{" "}
                <span></span>
              </label>
              <input
                placeholder="Channel URL"
                {...register("moreInfo.youtubeURL")}
              />
            </div>
            <div className={styles.otherLinksContainer}>
              <label htmlFor="otherInfo">
                <span>
                  <img src={facebook} alt="facebook link" /> Facebook
                </span>{" "}
                <span>facebook.com/</span>
              </label>
              <input
                placeholder="Facebook Username"
                {...register("moreInfo.facebookUsername")}
              />
            </div>
            <div className={styles.otherLinksContainer}>
              <label htmlFor="otherInfo">
                <span>
                  <img src={tiktok} alt="tiktok link" /> TikTok
                </span>{" "}
                <span>tiktok.com/</span>
              </label>
              <input
                placeholder="TikTok Username"
                {...register("moreInfo.tiktokUsername")}
              />
            </div>
            <div className={styles.otherLinksContainer}>
              <label htmlFor="otherInfo">
                <span>
                  <img src={vlive} alt="vlive link" /> V live
                </span>{" "}
                <span>https://www.vlive.tv/channel/ </span>
              </label>
              <input
                placeholder="Channel URL"
                {...register("moreInfo.vLiveURL")}
              />
            </div>
          </div>

          <Button
          fontSize="16px"
            onClick={(e) => (e.type = "submit")}
            btnType={BtnType.PRIMARY}>
            ????????????
          </Button>
        </form>
      </PageLayout>
    </div>
  );
};

export default EditProfile;
