import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select, { MultiValue } from "react-select"; // Import React Select and MultiValue

// Validation schema using yup
const schema = yup.object().shape({
    electionName: yup.string().required("Election name is required"),
    electionType: yup.string().required("Election type is required"),
    startDate: yup.date().required("Start date is required"),
    endDate: yup.date().required("End date is required"),
    candidates: yup.array().of(
        yup.object().shape({
            name: yup.string().required("Candidate name is required"),
        })
    ),
    additionalNote: yup.string(),
    eligibilityParams: yup.array().of(yup.string()).min(1, "Select at least one eligibility parameter"),
});

// Define the form values type
type FormValues = yup.InferType<typeof schema>;

// Define the eligibility option type
interface EligibilityOption {
    value: string;
    label: string;
}

const eligibilityOptions: EligibilityOption[] = [
    { value: "18 years and older", label: "18 years and older" },
    { value: "Citizens of USA", label: "Citizens of USA" },
    { value: "Registered voter", label: "Registered voter" },
];

export default function ManualForm() {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            candidates: [{ name: "" }],
            eligibilityParams: [],
        },
    });

    const { fields, append } = useFieldArray({
        control,
        name: "candidates",
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    // Handle the selection change for the eligibility parameters
    const handleEligibilityChange = (selectedOptions: MultiValue<EligibilityOption> | null) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setValue("eligibilityParams", selectedValues);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Election Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Election Name</label>
                <input
                    {...register("electionName")}
                    type="text"
                    className="w-full mt-1 p-2 border rounded-md"
                />
                {errors.electionName && <p className="text-red-500 text-sm">{errors.electionName.message}</p>}
            </div>

            {/* Election Type */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Election Type</label>
                <input
                    {...register("electionType")}
                    type="text"
                    className="w-full mt-1 p-2 border rounded-md"
                />
                {errors.electionType && <p className="text-red-500 text-sm">{errors.electionType.message}</p>}
            </div>

            {/* Start Date and End Date */}
            <div className="flex justify-between space-x-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                        {...register("startDate")}
                        type="date"
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                    {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                        {...register("endDate")}
                        type="date"
                        className="w-full mt-1 p-2 border rounded-md"
                    />
                    {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate.message}</p>}
                </div>
            </div>

            {/* Candidates */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Candidates</label>
                <div className="grid grid-cols-4 gap-4">
                    {fields.map((field, index) => (
                        <div key={field.id}>
                            <input
                                {...register(`candidates.${index}.name`)}
                                type="text"
                                className="w-full p-2 border rounded-md"
                                placeholder={`Candidate ${index + 1}`}
                            />
                            {errors.candidates?.[index]?.name && (
                                <p className="text-red-500 text-sm">{errors.candidates[index]?.name?.message}</p>
                            )}
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={() => append({ name: "" })}
                    className="mt-4 px-6 py-2 rounded-md bg-gray-200 font-semibold text-neutral"
                >
                    + Add Candidate
                </button>
            </div>

            {/* Eligibility Parameters */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Eligibility Parameters</label>
                <Select
                    isMulti
                    options={eligibilityOptions}
                    className="mt-1 py-6"
                    onChange={handleEligibilityChange}
                    classNamePrefix="select"
                />
                {errors.eligibilityParams && (
                    <p className="text-red-500 text-sm">{errors.eligibilityParams.message}</p>
                )}
            </div>

            {/* Additional Note */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Additional Note</label>
                <textarea
                    {...register("additionalNote")}
                    className="w-full mt-1 p-2 border rounded-md"
                    rows={4}
                />
            </div>

            {/* Submit Button */}
            <div className='flex justify-center '>
                <button
                    type="submit"
                    className="w-[80%] px-6 py-3 bg-primary text-white rounded-lg font-semibold"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
