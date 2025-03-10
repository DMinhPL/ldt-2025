import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FloatingLabelInput from "../atoms/FloatingLabelInput";
import Button from "../atoms/Button";
import FloatingLabelTextarea from "../atoms/FloatingTextarea";
import CustomSelect from "../atoms/CustomSelect";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    companyName: z.string().min(1, "Company Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(1, "Phone number is required"),
    projectDetails: z.string().optional(),
    budget: z.string().min(1, "Budget is required"),
    source: z.string().min(1, "Source is required"),
});

export type ContactFormType = z.infer<typeof formSchema>;

interface FormProps {
    onSubmit: (data: ContactFormType) => void;
}

const ContactForm: React.FC<FormProps> = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormType>({
        resolver: zodResolver(formSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-5 pt-10 pb-7 lg:pt-6 lg:pb-10 lg:px-10 shadow-xl rounded-xl">
            <h2 className="text-[30px] lg:text-2xl xl:text-3xl font-semibold mb-4">Submit your request</h2>

            <div className="lg:grid lg:grid-cols-2 gap-4">
                <div>
                    <FloatingLabelInput
                        label="Your Name *"
                        type="text"
                        id="name"
                        error={errors?.name?.message}
                        {...register("name")}
                    />
                </div>

                <div>
                    <FloatingLabelInput
                        label="Company Name *"
                        type="text"
                        id="companyName"
                        error={errors?.companyName?.message}
                        {...register("companyName")}
                    />
                </div>
                <div>
                    <FloatingLabelInput
                        label="Email address *"
                        type="email"
                        id="email"
                        error={errors?.email?.message}
                        {...register("email")}
                    />
                </div>
                <div>
                    <FloatingLabelInput
                        label="Phone number *"
                        type="tel"
                        id="phone"
                        error={errors?.phone?.message}
                        {...register("phone")}
                    />
                </div>
                <div className="lg:col-span-2">
                    <FloatingLabelTextarea
                        label="Project Details"
                        id="message"
                        {...register("projectDetails")}
                        error={errors.projectDetails?.message}
                    />
                </div>
                <div className="lg:col-span-2">
                    <CustomSelect
                        label="Budget"
                        id="budget"
                        options={[
                            { value: "under_10k", label: "Under $10,000" },
                            { value: "10k_50k", label: "$10,000 - $50,000" },
                            { value: "50k_100k", label: "$50,000 - $100,000" },
                            { value: "100k_500k", label: "$100,000 - $500,000" },
                            { value: "500k_plus", label: "Above $500,000" },
                        ]}
                        placeholder="How much has been budgeted for this project?"
                        error={errors.budget?.message}
                        {...register("budget")}
                    />
                </div>
                <div className="col-span-2">
                    <CustomSelect
                        label="Source"
                        id="sources"
                        options={[
                            { value: "google", label: "Google Search" },
                            { value: "social_media", label: "Social Media (Facebook, Instagram, etc.)" },
                            { value: "friend_referral", label: "Referral from a Friend" },
                            { value: "advertisement", label: "Advertisement" },
                            { value: "other", label: "Other" },
                        ]}
                        placeholder="How did you hear about us?"
                        error={errors.source?.message}
                        {...register("source")}
                    />
                </div>
            </div>


            <div className="cta mt-8 max-w-[130px] mr-0 ml-auto">
                <Button type="submit">
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
