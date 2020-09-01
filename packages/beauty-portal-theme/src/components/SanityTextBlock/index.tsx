import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { SanityTextBlockInterface } from './models';
import './styles.scss';

const SanityTextBlock: FunctionComponent<SanityTextBlockInterface> = ({
  _rawTextBlockBody,
  textBlockType,
  ctaLabel,
  ctaUrl,
}) => {
  const getComponentvariant = type => {
    return type
      .replace(/\s/g, '')
      .trim()
      .toLowerCase();
  };
  return (
    <section
      className={classNames(
        'bp-textBlock',
        getComponentvariant(textBlockType.name) === 'textblock-type1'
          ? 'typea'
          : null
      )}
    >
      <div className="bp-container">
        <div className="bp-textBlock_desc">
          <BlockContent
            serializers={blockTypeDefaultSerializers}
            blocks={_rawTextBlockBody}
          />
        </div>
      </div>
      {ctaLabel && ctaUrl && (
        <div className="bp-textBlock_cta-link">
          <Link to={ctaUrl || '/'}>
            <button className="bp-textBlock_cta">{ctaLabel}</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default SanityTextBlock;
