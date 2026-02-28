import type { Schema, Struct } from '@strapi/strapi';

export interface AtomsLink extends Struct.ComponentSchema {
  collectionName: 'components_atoms_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'code';
  };
  attributes: {
    icons: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AtomsOptionsValue extends Struct.ComponentSchema {
  collectionName: 'components_atoms_options_values';
  info: {
    displayName: 'Options value';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AtomsOurServices extends Struct.ComponentSchema {
  collectionName: 'components_atoms_our_services';
  info: {
    displayName: 'Our Services';
    icon: 'puzzle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutContentPanel extends Struct.ComponentSchema {
  collectionName: 'components_layout_content_panels';
  info: {
    displayName: 'Content Panel';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    thumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
    icon: 'chartBubble';
  };
  attributes: {
    heading: Schema.Attribute.String;
    link: Schema.Attribute.Component<'atoms.link', false>;
    longDescription: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutMetadata extends Struct.ComponentSchema {
  collectionName: 'components_layout_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
    icon: 'seed';
  };
  attributes: {
    canonical_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    keywords: Schema.Attribute.Text;
    og_description: Schema.Attribute.String;
    og_image: Schema.Attribute.Text;
    og_title: Schema.Attribute.String;
    og_type: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutScheduleBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_schedule_blocks';
  info: {
    displayName: 'Schedule block';
    icon: 'layer';
  };
  attributes: {
    cta: Schema.Attribute.Component<'atoms.link', false>;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface LayoutWhyBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_why_blocks';
  info: {
    displayName: 'Why block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Component<'atoms.our-services', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atoms.link': AtomsLink;
      'atoms.options-value': AtomsOptionsValue;
      'atoms.our-services': AtomsOurServices;
      'layout.content-panel': LayoutContentPanel;
      'layout.hero-section': LayoutHeroSection;
      'layout.metadata': LayoutMetadata;
      'layout.schedule-block': LayoutScheduleBlock;
      'layout.why-block': LayoutWhyBlock;
    }
  }
}
