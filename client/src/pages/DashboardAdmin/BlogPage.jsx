import React from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomLabel from '../../components/CustomLabel'


function BlogPage() {
  return (
    <div>
      <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
        <h1 className='text-3xl font-bold mb-2'>Ajouter un nouveau blog</h1>
        <small>
          Ecrivez et publiez vos articles ici
        </small>

        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                <form>
                    {/* Image */}
                    <div className="mb-4">
                    <CustomLabel
                      label="Image *"
                    />

                    <CustomInput
                      type="file"
                      name="image"
                    />
                  </div>

                    {/* title */}
                  <div className="mb-4">
                    <CustomLabel
                      label="Titre *"
                    />

                    <CustomInput
                      type="text"
                      name="title"
                      placeholder="Entrez un titre"
                    />
                  </div>
                      {/* data */}
                  <div className='mb-4'>
                    <CustomLabel
                      type="date"
                      label="Date *"
                    />
                    <CustomInput
                      type="date"
                      id="date"
                      name="datedenaissance"
                    />
                  </div>
                    {/* content */}
                  <div className="mb-4">
                    <CustomLabel
                      type="text"
                      label="Content *"
                    />
                    <textarea
                      id="content"
                      rows={6}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Votre Contenu"
                    />
                  </div>
                      {/* button submit  */}
                  <div className="flex p-1">
                    <CustomButton
                      type="submit"
                      content="Publiez"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
