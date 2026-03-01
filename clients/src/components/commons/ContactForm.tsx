

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postContactService } from '../../api';
import { useTranslations } from '../../i18n/utils';
import CustomizedSelect from '../atoms/CustomizedSelect';
import FloatingLabelInput from '../atoms/FloatingLabelInput';
import FloatingLabelTextarea from '../atoms/FloatingLabelTextArea';
import { z } from "astro:schema";
import Button from '../atoms/Button';

interface Props {
  lang: SystemLanguageEnum;
  general?: GeneralResponseType;
}

const ContactForm: React.FC<Props> = ({ lang, general }) => {
  const t = useTranslations(lang);
  const [appLoading, setAppLoading] = useState(false);
  const contactFormSchema = z.object({
    name: z.string().min(1, t('validation.nameRequired')),
    companyName: z.string().min(1, t('validation.companyRequired')),
    email: z.string().email(t('validation.emailInvalid')),
    phone: z.string().min(1, t('validation.phoneRequired')),
    projectDetails: z.string().optional(),
    budget: z.string().min(1, t('validation.budgetRequired')),
    source: z.string().min(1, t('validation.sourceRequired')),
  });
  type ContactFormType = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleFormSubmit = async (data: ContactFormType) => {
    setAppLoading(true);
    try {
      await postContactService({
        name: data.name,
        company_name: data.companyName,
        email: data.email,
        phone: data.phone,
        detail: data.projectDetails || '',
        budget: data.budget,
        source: data.source,
      });
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setAppLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-white px-5 pt-10 pb-7 lg:pt-6 lg:pb-10 lg:px-10 shadow-xl rounded-xl">
      <h2 className="text-[30px] lg:text-2xl xl:text-3xl font-semibold mb-4">{t('general.submitYourRequest')}</h2>

      <div className="lg:grid lg:grid-cols-2 gap-4">
        <div>
          <FloatingLabelInput
            label={`${t('general.yourName')} *`}
            type="text"
            id="name"
            error={errors?.name?.message}
            {...register('name')}
          />
        </div>

        <div>
          <FloatingLabelInput
            label={`${t('general.companyName')} *`}
            type="text"
            id="companyName"
            error={errors?.companyName?.message}
            {...register('companyName')}
          />
        </div>
        <div>
          <FloatingLabelInput
            label={`${t('general.emailAddress')} *`}
            type="email"
            id="email"
            error={errors?.email?.message}
            {...register('email')}
          />
        </div>
        <div>
          <FloatingLabelInput
            label={`${t('general.phoneNumber')} *`}
            type="tel"
            id="phone"
            error={errors?.phone?.message}
            {...register('phone')}
          />
        </div>
        <div className="lg:col-span-2">
          <FloatingLabelTextarea
            label={t('general.projectDetail')}
            id="message"
            {...register('projectDetails')}
            error={errors.projectDetails?.message}
          />
        </div>
        <div className="lg:col-span-2">
          <CustomizedSelect
            label={t('general.budget')}
            id="budget"
            options={general?.budget_options?.map((v) => ({ value: v.label, label: v.label })) || []}
            placeholder={t('general.howMuchHasBeenBudgetedForThisProject')}
            error={errors.budget?.message}
            {...register('budget')}
          />
        </div>
        <div className="col-span-2">
          <CustomizedSelect
            label={t('general.source')}
            id="sources"
            options={general?.source_options?.map((v) => ({ value: v.label, label: v.label })) || []}
            placeholder={t('general.howDidYouHearAboutUs')}
            error={errors.source?.message}
            {...register('source')}
          />
        </div>
      </div>

      <div className="cta mt-8 max-w-32.5 mr-0 ml-auto">
        <Button type="submit" className="rounded-[10px]!" loading={appLoading}>
          {t('general.submit')}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
