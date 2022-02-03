import { render, fireEvent } from '@testing-library/react';

import GalleryEdit from './index';

describe('GalleryEdit', () => {
  const handleClickAddHallButton = jest.fn();
  const handleChangeHallName = jest.fn();
  const handleClickDeleteButton = jest.fn();

  interface HallProps {
    id: number;
    name: string;
  }

  function renderGalleryEdit(halls: HallProps[] = []) {
    return render(
      <GalleryEdit
        halls={halls}
        onClickAddHallButton={handleClickAddHallButton}
        onChangeHallName={handleChangeHallName}
        onClickDeleteHallButton={handleClickDeleteButton}
      />,
    );
  }

  it('renders poster upload interface', () => {
    const { getByLabelText } = renderGalleryEdit();

    expect(getByLabelText('포스터 업로드')).not.toBeNull();
  });

  it('renders poster upload interface', () => {
    const { getByLabelText } = renderGalleryEdit();

    expect(getByLabelText('포스터 업로드')).not.toBeNull();
  });

  it('renders gallery upload interfaces', () => {
    const { getByLabelText } = renderGalleryEdit();

    expect(getByLabelText('제목')).not.toBeNull();
    expect(getByLabelText('분류')).not.toBeNull();
    expect(getByLabelText('기간')).not.toBeNull();
    expect(getByLabelText('설명')).not.toBeNull();
  });

  it('renders buttons for this page', () => {
    const { container } = renderGalleryEdit();

    expect(container).toHaveTextContent('전시관 추가');
    expect(container).toHaveTextContent('미리보기');
    expect(container).toHaveTextContent('갤러리 생성');
  });

  it('listens click event on "전시관 추가" button', () => {
    const { getByText } = renderGalleryEdit();

    fireEvent.click(getByText('전시관 추가'));

    expect(handleClickAddHallButton).toBeCalled();
  });

  it('renders "작품등록" buttons', () => {
    const mockHalls = [
      {
        id: 1,
        name: '',
      },
      {
        id: 2,
        name: '',
      },
    ];

    const { container } = renderGalleryEdit(mockHalls);

    expect(container).toHaveTextContent('작품등록');
  });
});
